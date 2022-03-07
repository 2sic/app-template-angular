// In case you need to know more about WebApis, 
// visit the tutorials on https://2sxc.org/dnn-tutorials/

// Add namespaces to enable security in Oqtane & Dnn despite the differences
#if NETCOREAPP
using Microsoft.AspNetCore.Authorization; // .net core [AllowAnonymous] & [Authorize]
using Microsoft.AspNetCore.Mvc;           // .net core [HttpGet] / [HttpPost] etc.
#else
// 2sxclint:disable:no-dnn-namespaces 2sxclint:disable:no-web-namespaces
using DotNetNuke.Web.Api;
using System.Web.Http;
#endif
using System;

[AllowAnonymous]
[ValidateAntiForgeryToken]
public class SimpleController : Custom.Hybrid.Api12
{
	[HttpGet]
	public string Hello(string name = null)
	{
		return name == null ? "Hello from the controller in web api" : "Hello " + name;
	}


	[HttpGet]
	public int[] Numbers()
	{
		return new int[] { 7, 12, 2972 };
	}


	[HttpGet]
	public dynamic Something(string name) 
	{
		return new {
			Name = name,
			Birthday = new DateTime(2012, 05, 12)
		};

	}

}
