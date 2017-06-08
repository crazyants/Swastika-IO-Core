﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Swastika.Extension.Blog.AutoMapper;
using Swastika.Infrastructure.Data.Extensions;
using System.IO;

namespace Swastika.Extension.Blog.Data
{
    public class BlogDbContext : DbContext
    {
        /// <summary>
        /// The constant default connection{CC2D43FA-BBC4-448A-9D0B-7B57ADF2655C}
        /// </summary>
        private const string CONST_DEFAULT_CONNECTION = "BlogConnection";
        /// <summary>
        /// The constant file appsetting{CC2D43FA-BBC4-448A-9D0B-7B57ADF2655C}
        /// </summary>
        private const string CONST_FILE_APPSETTING = "appsettings.json";
        /// <summary>
        /// Gets or sets the customers.
        /// </summary>
        /// <value>
        /// The customers.
        /// </value>
        public DbSet<Extension.Blog.Models.Blog> Blog { get; set; }

        /// <summary>
        /// Called when [model creating].
        /// </summary>
        /// <param name="modelBuilder">The model builder.</param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("Ext");
            modelBuilder.AddConfiguration(new BlogMap());

            base.OnModelCreating(modelBuilder);
        }

        /// <summary>
        /// Called when [configuring].
        /// </summary>
        /// <param name="optionsBuilder">The options builder.</param>
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // get the configuration from the app settings
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile(CONST_FILE_APPSETTING)
                .Build();

            // define the database to use
            optionsBuilder.UseSqlServer(config.GetConnectionString(CONST_DEFAULT_CONNECTION));
        }
    }
}