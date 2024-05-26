using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UnitConverterDB.Data;

namespace UnitConverterDB.Controllers
{
    public class ConvertTemperatureController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ConvertTemperatureController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: ConvertTemperature
        public async Task<IActionResult> Index()
        {
            return View(await _context.ConvertTemperature.ToListAsync());
        }
    }
}
