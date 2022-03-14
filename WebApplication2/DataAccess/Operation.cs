using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;


namespace WebApplication2.DataAccess
{
    
    public class Operation
    {
        SqlConnection connect= new SqlConnection("data source=DESKTOP-7LL68SG\\SQLEXPRESS01; database=vegfru; integrated security = SSPI");
        SqlCommand command = new SqlCommand();


        public string CreateProductId()
        {
            int O_Id = 500;
            int count = 0;
            
            try
            {
                connect.Open();
                string Query = "SELECT * FROM Products";
                SqlCommand ExeQuery = new SqlCommand(Query, connect);
                SqlDataReader Det = ExeQuery.ExecuteReader();
                while (Det.Read())
                {
                    count++;
                }
                connect.Close();
                return (O_Id + count + 1).ToString();
            }
            catch (Exception Exe)
            {
                return "601";
            }
        }
        public string AdminAddProduct(string Categorie, string Name, int Price, int Offer, int Stock, string Url)
        {
            string Add_Date = DateTime.Now.ToString("yyyy-MM-dd");
            try
            {
                connect.Open();
                command.Connection = connect;
                command.CommandText = "insert into Products(productid,categories,name,price,offer,stock,url,addedDate) values('"+ CreateProductId()+ "','"+Categorie+ "','" + Name + "','" +Price + "','" +Offer+ "','" +Stock+ "','" +Url+ "','" + Add_Date+ "')";
                command.ExecuteNonQuery();

                return "true";
            }
            catch(Exception Exe)
            {
                return Exe.ToString();
            }

        }
    }
}