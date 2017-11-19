var image = {image: "https://www.example.com/path/to/image.jpg"};
var xmlhttp = new XMLHttpRequest();
var result;

xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    result = xmlhttp.responseText;
  }
}

xmlhttp.open("POST https://dev.sighthoundapi.com/v1/detections?type=face,person&faceOption=gender,landmark,age,pose,emotion");
xmlhttp.setRequestHeader("Content-type", "application/json");
xmlhttp.setRequestHeader("X-Access-Token", "rIf8x5jZCKMkoUGx93P3wFXNwTC2piTMw9c4");
xmlhttp.send(JSON.stringify(image));
