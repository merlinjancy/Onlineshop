using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication2.Models;
using System.Data.SqlClient;



namespace WebApplication2.Controllers
{
    public class HomeController : Controller
    {
        SqlConnection db = new SqlConnection();
        SqlCommand command = new SqlCommand();

        public Boolean connectionopen()
        {
            try
            {
                db.ConnectionString = "data source=DESKTOP-7LL68SG\\SQLEXPRESS01; database=Authentication;Initial Catalog=Register; integrated security = true";
                return true;
            }
            catch (SqlException ConnectionError)
            {
                return false;
            }
        }
        public ActionResult Index()
        {
            

            return View();
        }

        

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Categories()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Products()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult NewArrivals()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }


        public ActionResult Login()
        {
            return View();
        }
        public ActionResult Register()
        {
            return View();
        }

        /*[HttpPost]

        public ActionResult Register(Customer data)
        {
            if (connectionopen() == true)
            {
                try
                {
                    db.Open();
                    command.Connection = db;
                    command.CommandText = "insert into register values('" + data.Id + "','" + data.Username + "','" + data.Email + "','" + data.PhoneNumber + "','" + data.Password + "')";
                    command.ExecuteNonQuery();
                    db.Close();
                    return Content("registered");
                }
                catch (SqlException error)
                {
                    db.Close();
                    return Content("" + error);
                }
            }
            else
            {
                return Content("Error");
            }
            return View();
        }

*/

    }
}