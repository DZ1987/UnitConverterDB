using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UnitConverterDB.Data;

namespace UnitConverterDB.Controllers
{
    public class ConvertLengthController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ConvertLengthController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: ConvertLength
        public async Task<IActionResult> Index()
        {
            return View(await _context.ConvertLength.ToListAsync());
        }
    }
}
