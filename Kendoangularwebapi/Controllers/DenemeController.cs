﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Kendoangularwebapi.Controllers
{
    public class DenemeController : ApiController
    {
        // GET api/deneme
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/deneme/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/deneme
        public string Post([FromBody]string value)
        {
            return "OK";
        }

        // PUT api/deneme/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/deneme/5
        public void Delete(int id)
        {
        }
    }
}
