using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class DataModel
    {
    }

    public class AdminAddProduct
    {
        public string Categories { get; set; }

        public string Name { get; set; }

        public int Price { get; set; }

        public int Offer { get; set; }

        public int Stock { get; set; }

        public string Url { get; set; }
    }
}