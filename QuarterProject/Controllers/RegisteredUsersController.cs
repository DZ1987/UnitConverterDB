using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UnitConverterDB.Data;
using UnitConverterDB.Models;

namespace UnitConverterDB.Controllers
{
	[Authorize(Roles = IdentityHelper.RegisteredUser)]
    public class RegisteredUsersController : Controller
    {
        private readonly ApplicationDbContext _context;

        public RegisteredUsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: RegisteredUsers
        public async Task<IActionResult> Index()
        {
            string? UserIdentityName = @User.Identity?.Name; // The Users Identity Name

            // Displays only the UserText of whoever is currently Logged In
            return View(await _context.RegisteredUser.Where(r => r.UserName == UserIdentityName).ToListAsync());
        }

        // GET: RegisteredUsers/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var registeredUser = await _context.RegisteredUser
                .FirstOrDefaultAsync(m => m.Id == id);
            if (registeredUser == null)
            {
                return NotFound();
            }

            return View(registeredUser);
        }

        // GET: RegisteredUsers/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: RegisteredUsers/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,UserName,UserTextTitle,UserText")] RegisteredUser registeredUser)
        {
            if (ModelState.IsValid)
            {
                _context.Add(registeredUser);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(registeredUser);
        }

        // GET: RegisteredUsers/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var registeredUser = await _context.RegisteredUser.FindAsync(id);
            if (registeredUser == null)
            {
                return NotFound();
            }
            return View(registeredUser);
        }

        // POST: RegisteredUsers/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,UserName,UserTextTitle,UserText")] RegisteredUser registeredUser)
        {
            if (id != registeredUser.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(registeredUser);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!RegisteredUserExists(registeredUser.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(registeredUser);
        }

        // GET: RegisteredUsers/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var registeredUser = await _context.RegisteredUser
                .FirstOrDefaultAsync(m => m.Id == id);
            if (registeredUser == null)
            {
                return NotFound();
            }

            return View(registeredUser);
        }

        // POST: RegisteredUsers/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var registeredUser = await _context.RegisteredUser.FindAsync(id);
            if (registeredUser != null)
            {
                _context.RegisteredUser.Remove(registeredUser);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool RegisteredUserExists(int id)
        {
            return _context.RegisteredUser.Any(e => e.Id == id);
        }
    }
}
