using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace QuarterProject.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "RegisteredUser",
                columns: new[] { "Id", "UserName", "UserText" },
                values: new object[,]
                {
                    { 1, "Admin", "T E S T\r\nS     E\r\nE     S\r\nT S E T" },
                    { 2, "Admin", "TTTTTTTTTT EEEEEEEE SSSSSSSS TTTTTTTTTT\r\n    TT     EE       SS           TT\r\n    TT     EEEEEEE  SSSSSSSS     TT\r\n    TT     EE             SS     TT\r\n    TT     EEEEEEEE SSSSSSSS     TT" },
                    { 3, "Admin", "<tbody>\r\n    @foreach (var item in Model)\r\n    {\r\n        <tr>\r\n            <td class=\"col-1 border-right\">\r\n                <a asp-action=\"Edit\" asp-route-id=\"@item.Id\">Edit</a><br>\r\n                <a asp-action=\"Details\" asp-route-id=\"@item.Id\">Details</a><br>\r\n                <a asp-action=\"Delete\" asp-route-id=\"@item.Id\">Delete</a>\r\n            </td>\r\n            <td>\r\n                <pre>@Html.DisplayFor(modelItem => item.UserText)</pre>\r\n            </td>\r\n        </tr>\r\n    }\r\n</tbody>" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "RegisteredUser",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "RegisteredUser",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "RegisteredUser",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
