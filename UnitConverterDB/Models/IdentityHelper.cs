using Microsoft.AspNetCore.Identity;
#nullable disable

namespace UnitConverterDB.Models
{
    public static class IdentityHelper
    {
        public const string RegisteredUser = "Registered User";

        public static async Task CreateRoles(IServiceProvider provider, params string[] roles)
        {
            RoleManager<IdentityRole> roleManager = provider.GetService<RoleManager<IdentityRole>>();

            foreach (string role in roles)
            {
                bool doesRoleExist = await roleManager.RoleExistsAsync(role);
                if (!doesRoleExist)
                {
                    await roleManager.CreateAsync(new IdentityRole(role));
                }
            }
        }

        public static async Task CreateDefaultUser(IServiceProvider provider, string role)
        {
            UserManager<IdentityUser> userManager = provider.GetService<UserManager<IdentityUser>>();

            // If no users are present, make the default user
            int numUsers = (await userManager.GetUsersInRoleAsync(role)).Count;
            if (numUsers == 0) // If no users are in the specified role
            {
                IdentityUser defaultUser = new()
                {
                    Email = "admin@admin.com",
                    UserName = "Admin"
                };

                await userManager.CreateAsync(defaultUser, "adminZ)0");

                await userManager.AddToRoleAsync(defaultUser, role);
            }
        }
    }
}
