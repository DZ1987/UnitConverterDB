using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UnitConverterDB.Data;

namespace UnitConverterDB.Controllers
{
    public class StatisticsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public StatisticsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Statistics
        public async Task<IActionResult> Index()
        {
            return View(await _context.Statistics.ToListAsync());
        }

        // GET: GetZScore
        public async Task<IActionResult> GetZScore()
        {
            return View(await _context.Statistics.ToListAsync());
        }
    }
}