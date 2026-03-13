using System.Linq;
using System.Web;

namespace AppCode.Extensions.JsAppEditions
{
  /// <summary>
  /// This class is used to track the edition of the app,
  /// which can be used to show different versions of the app (e.g. live, dev, test)
  /// and remember it in a cookie when developing / testing.
  /// </summary>
  public class JsAppEditionService : Custom.Hybrid.CodeTyped
  {

    // ----------------------------------  Private Constants ----------------------------------
    private const string DefaultEdition = "live";    // the default edition if nothing is set
    private const string CookieNameTemplate = "polymorph-app-#-edition"; // the cookie name to remember edition when developing / testing

    /// <summary>
    /// The current edition of this app, as stored in the cookie (or default in not set)
    /// </summary>
    public string CurrentEdition =>
      GetEditionFromCookie(DefaultEdition);

    /// <summary>
    /// The cookie name to store the edition when developing / testing uses the app-id in the key, so it won't interfere with other apps
    /// </summary>
    public string EditionCookieName() =>
      CookieNameTemplate.Replace("#", App.AppId.ToString());

    /// <summary>
    /// Get the edition from the cookie
    /// </summary>
    public string GetEditionFromCookie(string defaultEdition)
    {
      var key = EditionCookieName();

      return HttpContext.Current.Request.Cookies.AllKeys.Contains(key)
        ? HttpContext.Current.Request.Cookies.Get(key).Value
        : defaultEdition;
    }
  }
}