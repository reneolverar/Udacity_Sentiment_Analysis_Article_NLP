// API call
export async function sentimentAnalysisCheck (text, textType, apiKey) {

    // API call input
    const formdata = new FormData();
    formdata.append("key", apiKey);

    // TEXT/URL Selector
    if (textType == "Text"){
        formdata.append("txt", text);
    }
    else {formdata.append("url", text);}

    formdata.append("lang", "en");  // 2-letter code, like en es fr ...

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    }

    const res = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
    try {
        const body = await res.json();
        if (body.status.msg != 'OK') {
            throw Error(body.status.msg);
        }
        console.log(body)
        document.getElementById('error').style.display = "none"
        return body
    } catch (error) {
        // appropriately handle the error
        console.log('error', error);
        document.getElementById('results').style.display = "none"
        document.getElementById('error').style.display = "block"
        document.getElementById('error').innerHTML = error
        return error;
    }
}