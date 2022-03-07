using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using ToSic.Razor.Blade;

public class Editions: Custom.Hybrid.Code12 {
  // -------------------------------------------------------------------------------------
  // These helpers are used by the CSHTML code which loads the angular app.
  // They primarily track what edition to show by showing the links and storing it in a cookie
  // -------------------------------------------------------------------------------------

  // ----------------------------------  Private Constants ----------------------------------
  private const string DefaultEdition = "live";    // the default edition if nothing is set
  private const string DefaultEditions = "live,staging,local";  // Default list of editions
  private const string CookieNameTemplate = "polymorph-app-#-edition"; // the cookie name to remember edition when developing / testing

  // -------------------------------- Current Edition Info -------------------------------
  /// the current edition of this app, as stored in the cookie (or default in not set)
  public string CurrentEdition {
    get { return GetEditionFromCookie(DefaultEdition); }
  }
  
  /// The cookie name to store the edition when developing / testing uses the app-id in the key, so it won't interfere with other apps
  public string EditionCookieName() {
    return CookieNameTemplate.Replace("#", App.AppId.ToString());
  }

  /// Get the edition from the cookie
  public string GetEditionFromCookie(string defaultEdition) {
    var key = EditionCookieName();

    return HttpContext.Current.Request.Cookies.AllKeys.Contains(key) 
      ? HttpContext.Current.Request.Cookies.Get(key).Value 
      : defaultEdition;
  }
}