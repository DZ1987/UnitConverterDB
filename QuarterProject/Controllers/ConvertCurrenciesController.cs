using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UnitConverterDB.Data;

namespace UnitConverterDB.Controllers
{
    public class ConvertCurrenciesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ConvertCurrenciesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: ConvertCurrencies
        public async Task<IActionResult> Index()
        {
            return View(await _context.ConvertCurrency.ToListAsync());
        }
    }
}
