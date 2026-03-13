using System.Linq;
using System.Text.RegularExpressions;
using System.Web.Helpers;
using ToSic.Razor.Blade;

namespace AppCode.Extensions.Angular
{
  public class Angular : Custom.Hybrid.CodeTyped
  {
    /// <summary>
    /// These helpers are used by the CSHTML code which loads the angular app.
    /// They do a bunch of things, like switching between testing/live code and more.
    /// </summary>

    // ------------------------------ Get from Generated HTML ------------------------------
    // load the Angular generated html file and keep only the important parts
    public string ImportAngularHtml(string edition, string appTag, string appPath = "")
    {
      // 1. Build the path to where the angular app is stored
      var editionPath = Text.Has(edition) ? edition + "/" : "";
      var resourcesPath = App.Folder.Url + "/" + editionPath + appPath;
      var indexFile = App.Folder.PhysicalPath + @"\" + editionPath.Replace("/", @"\") + appPath + @"\index.html";

      string html_orig;

      /// <summary>
      /// Read body contents from index.html
      /// </summary>
      try
      {
        html_orig = System.IO.File.ReadAllText(indexFile);
      }
      catch
      {
        return "Error trying to access '" + indexFile + "' - it probably doesn't exist";
      }

      /// <summary>
      /// Get only the body contents
      /// </summary>
      var html = Regex.Match(html_orig, "<body.*?>(.*?)</body>", RegexOptions.Singleline).Groups[1].Value;

      /// <summary>
      /// Get stylesheets
      /// </summary>
      html += Regex.Match(html_orig, "<link rel=\"stylesheet\".*?>", RegexOptions.Singleline).Groups[0].Value;

      /// <summary>
      /// Change stylesheet and script paths
      /// </summary>
      html = Regex.Replace(html, "(src|href)=\"(.*?)\"", "$1=\"" + resourcesPath + "/$2\"");

      /// <summary>
      /// Find the app-tag, and add the edition
      /// </summary>  
      html = html.Replace("<" + appTag + ">", "<" + appTag + AppAttributes(edition, resourcesPath + "/") + ">");

      return html;
    }

    /// <summary>
    /// This returns the tag needed to hot-load the angular app 
    /// </summary>
    public dynamic GetLocalDevTag(string appTag, string localDevServer, string edition = "local")
    {
      return "<" + appTag + AppAttributes(edition, localDevServer + "/") + ">"
        + "This loads all scripts from " + localDevServer + " using the same protocol (http/https) as the current site uses. "
        + "If you see this message, your local dev is either not running, or the configuration is wrong. <br>"
        + "It should be running on localhost:4200 and use the same protocol as this website. <br><br>"
        + "To make sure you're doing things right, please follow <a href='https://azing.org/2sxc/r/oCmPBI3p' target='_blank'>these instructions</a>. <br>"
        + "<br>"
        + "Special note: if your site is running with ssl then you'll want to use <code>npm run local-ssl</code>. Chrome will then complain that it doesn't know the security certificate. "
        + "In this case, first browse to <a href='//localhost:4200/runtime.js' target='_blank'>a file hosted by the local server</a> and tell Chrome it's safe."
        + "</" + appTag + ">";
    }

    // ------------------------------- Private Functions ------------------------------
    private string AppAttributes(string currentEdition, string distPath)
    {
      return " " + Tag.Attr("edition", currentEdition)
        + " " + Tag.Attr("api-edition", currentEdition)
        + (Text.Has(distPath) ? " " + Tag.Attr("angular-path", distPath) : "");
    }
  }
}