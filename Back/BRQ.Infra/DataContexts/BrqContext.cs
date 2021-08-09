using System;
using System.Data;
using BRQ.Shared;
using Microsoft.Data.SqlClient;

namespace BRQ.Infra.DataContexts
{
    public class BrqContext : IDisposable
    {
        public SqlConnection Connection { get; set; }

        public BrqContext()
        {
            Connection = new SqlConnection(Settings.ConnectionString);
            Connection.Open();
        }

        public void Dispose()
        {
            if (Connection.State != ConnectionState.Closed)
                Connection.Close();
        }
    }
}