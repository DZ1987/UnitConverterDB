using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuarterProject.Data;

namespace QuarterProject.Controllers
{
    public class ConvertTemperaturesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ConvertTemperaturesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: ConvertTemperatures
        public async Task<IActionResult> Index()
        {
            return View(await _context.ConvertTemperature.ToListAsync());
        }
    }
}
