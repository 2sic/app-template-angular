using System.Linq;
using System.Text.RegularExpressions;
using System.Web.Helpers;
using ToSic.Razor.Blade;
public class Angular: Custom.Hybrid.Code12 {
  // -------------------------------------------------------------------------------------
  // These helpers are used by the CSHTML code which loads the angular app.
  // They do a bunch of things, like switching between testing/live code and more.
  // -------------------------------------------------------------------------------------

  // ----------------------------------  Private Constants ----------------------------------
  private const string DefaultAppName = "ng-app";   // Angular app name if not set
  private const string DefaultAppTag = "app-root";  // Angular app tag if not set
  private const string LocalDevServer = "//localhost:4200"; // default localhost dev-server using angular  

  
  // ------------------------------ Get from Generated HTML ------------------------------
  // load the Angular generated html file and keep only the important parts
  public string ImportAngularHtml(string edition, string appName = DefaultAppName, string appTag = DefaultAppTag) {
    // 1. build the path to where the angular app is stored
    var resourcesPath = App.Path + "/" + edition + "/dist/" + appName;
    var indexFile = App.PhysicalPath + @"\" + edition + @"\dist\" + appName + @"\index.html";
    string html_orig;

    // 2. Read body contents from index.html
    try {
      html_orig = System.IO.File.ReadAllText(indexFile);
    } catch {
      return "Error trying to access '" + indexFile + "' - it probably doesn't exist";
    }

    // 3.1. Get only the body contents
    var html = Regex.Match(html_orig, "<body.*?>(.*?)</body>", RegexOptions.Singleline).Groups[1].Value;

    // 3.2. Get stylesheets
    html += Regex.Match(html_orig, "<link rel=\"stylesheet\".*?>", RegexOptions.Singleline).Groups[0].Value;

    // 4. Change stylesheet and script paths
    html = Regex.Replace(html, "(src|href)=\"(.*?)\"", "$1=\"" + resourcesPath + "/$2\"");

    // 5. find the app-tag, and add the edition
    // var publicResourcePath = App
    html = html.Replace("<" + appTag + ">", "<" + appTag + AppAttributes(edition, resourcesPath + "/") + ">");

    return html;
  }

  // --------------------------------   Get from ng serve   -------------------------------
  // This returns the tag needed to hot-load the angular app 
  public dynamic GetLocalDevTag(string edition = "local", string appTag = DefaultAppTag, string localDevServer = LocalDevServer) {
    return "<" + appTag + AppAttributes(edition, LocalDevServer + "/") + ">" 
      + "This loads all scripts from " + localDevServer + " using the same protocol (http/https) as the current site uses. " 
      + "If you see this message, your local dev is either not running, or the configuration is wrong. <br>"
      + "It should be running on localhost:4200 and use the same protocol as this website. <br><br>"
      + "To make sure you're doing things right, please follow <a href='https://azing.org/2sxc/r/oCmPBI3p' target='_blank'>these instructions</a>. <br>"
      + "<br>"
      + "Special note: if your site is running with ssl then you'll want to use <code>npm run local-ssl</code>. Chrome will then complain that it doesn't know the security certificate. "
      + "In this case, first browse to <a href='//localhost:4200/runtime.js' target='_blank'>a file hosted by the local server</a> and tell Chrome it's safe."
      + "</" + appTag + ">";
  }

  public string GetLocalDevServer() {
    return LocalDevServer;
  }

  // ------------------------------- Private Functions ------------------------------
  private string AppAttributes(string currentEdition, string distPath) {
    return " " + Tag.Attr("edition", currentEdition) 
      + " " + Tag.Attr("api-edition", currentEdition)
      + (Text.Has(distPath) ? " " + Tag.Attr("angular-path", distPath) : "");
  }
}