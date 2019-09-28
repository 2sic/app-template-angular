// In case you need to know more about WebApis, 
// visit the tutorials on https://2sxc.org/dnn-tutorials/
using System.Web.Http;
using ToSic.SexyContent.WebApi;
using DotNetNuke.Web.Api;

[AllowAnonymous]
[ValidateAntiForgeryToken]
public class SimpleController : SxcApiController
{
	// Tell the server that we're listening to GET requests
	[HttpGet]
	public string Hello()
	{
		return "Hello from the controller with ValidateAntiForgeryToken in /api";
	}

}
