using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UnitConverterDB.Data;

namespace UnitConverterDB.Controllers
{
    public class ConvertCurrencyController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ConvertCurrencyController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: ConvertCurrency
        public async Task<IActionResult> Index()
        {
            return View(await _context.ConvertCurrency.ToListAsync());
        }
    }
}
