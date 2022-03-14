using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication2.Models;
using WebApplication2.DataAccess;

namespace WebApplication2.Controllers
{
    public class AdminController : Controller
    {

        Operation data = new Operation();
        // GET: Admin
        public ActionResult Dashboard()
        {
            return View();
        }

        public ActionResult AdminHome()
        {
            return View();
        }

        public ActionResult NewProduct()
        {
            return View();
        }


        [HttpPost]

        public ActionResult NewProduct(AdminAddProduct details)
        {
            string result = data.AdminAddProduct(details.Categories,details.Name,details.Price,details.Offer,details.Stock,details.Url);
            return Content(result);
        }
    }
}