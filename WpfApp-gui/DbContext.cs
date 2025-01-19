using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfApp_gui
{
    public class UserInfoDbContext:DbContext
    {
        public DbSet<UserInfo> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=D:\3rd sem\EC3404 GUI\final gui project\new app\wpf app\userinfo_app.db");
        }
    }
}
