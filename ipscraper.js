/* create a javascript code to scrape IP information */
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													
			js = "javascript:"
			js += "function getCity(callback) {"
			js += "var xmlhttp = new XMLHttpRequest();"
			js += "xmlhttp.open('GET','https://ipinfo.io',true);"
			js += "xmlhttp.onreadystatechange=function() {"
			js += "if (xmlhttp.readyState==4) callback(xmlhttp.responseText);"
			js += "}"
			js += "xmlhttp.send(null);"
			js += "}"
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																														
