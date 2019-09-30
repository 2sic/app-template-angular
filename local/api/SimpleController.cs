// In case you need to know more about WebApis, 
// visit the tutorials on https://2sxc.org/dnn-tutorials/
using DotNetNuke.Web.Api;
using ToSic.SexyContent.WebApi;
using System;
using System.Web.Http;

[AllowAnonymous]
[ValidateAntiForgeryToken]
public class SimpleController : SxcApiController
{
	// Tell the server that we're listening to GET requests
	[HttpGet]
	public string Hello()
	{
		return "Hello from the controller in web api";
	}

	public int[] Numbers()
	{
		return new int[] { 7, 12, 2972 };
	}

	public dynamic Something(string name) 
	{
		return new {
			Name = name,
			Birthday = new DateTime(2012, 05, 12)
		};

	}

}
