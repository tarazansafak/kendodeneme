﻿using System;
using System.Web.UI;

namespace Kendoangularwebapi
{
    public partial class Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Redirect("Login.aspx");
            base.OnLoad(e);
        }
    }
}