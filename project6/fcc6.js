var caldis="";

function bclick(value1)
{
	var len=caldis.length;

	if(len>20)
	{
		caldis="INVALID ENTRY";
		document.getElementById('dis').value=caldis;
		caldis="";
	}

	else
	{
		switch(value1)
		{
			case "eq": 
						caldis=eval(caldis);
						document.getElementById('dis').value=caldis;
						caldis="";
						break;

			case "ac":
						caldis="";
						document.getElementById('dis').value=caldis;
						break;

			case "back":
							
							caldis=caldis.slice(0,(caldis.length)-1);

							document.getElementById('dis').value=caldis;
							break;

			case "+":
			case "-":
			case "*":
						var len1=caldis.length;
						var last=caldis.charAt(len1-1);
						if((last=="+")||(last=="-")||(last=="*"))
						{
							caldis="INVALID ENTRY";
							document.getElementById('dis').value=caldis;
							caldis="";
						}
						else
			          {
			          	caldis+=value1;
			           document.getElementById('dis').value=caldis;
			          }
			           break;

			 default:      caldis+=value1;
			           document.getElementById('dis').value=caldis;     
					   									

		}
	}
}