using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using QuarterProject.Models;

namespace QuarterProject.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<RegisteredUser> RegisteredUser { get; set; }
        public DbSet<ConvertTemperature> ConvertTemperature { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Calls the OnModelCreating method of the base DbContext class.
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<RegisteredUser>().HasData(
                new RegisteredUser { Id = 1, UserName = "Admin", UserText = "T E S T\r\nS     E\r\nE     S\r\nT S E T" },
                new RegisteredUser { Id = 2, UserName = "Admin", UserText = "TTTTTTTTTT EEEEEEEE SSSSSSSS TTTTTTTTTT\r\n    TT     EE       SS           TT\r\n    TT     EEEEEEE  SSSSSSSS     TT\r\n    TT     EE             SS     TT\r\n    TT     EEEEEEEE SSSSSSSS     TT" },
                new RegisteredUser { Id = 3, UserName = "Admin", UserText = "<tbody>\r\n    @foreach (var item in Model)\r\n    {\r\n        <tr>\r\n            <td class=\"col-1 border-right\">\r\n                <a asp-action=\"Edit\" asp-route-id=\"@item.Id\">Edit</a><br>\r\n                <a asp-action=\"Details\" asp-route-id=\"@item.Id\">Details</a><br>\r\n                <a asp-action=\"Delete\" asp-route-id=\"@item.Id\">Delete</a>\r\n            </td>\r\n            <td>\r\n                <pre>@Html.DisplayFor(modelItem => item.UserText)</pre>\r\n            </td>\r\n        </tr>\r\n    }\r\n</tbody>" }
            );
        }
    }
}
