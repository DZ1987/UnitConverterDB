﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuarterProject.Data;

namespace QuarterProject.Controllers
{
    public class ConvertLengthsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ConvertLengthsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: ConvertLengths
        public async Task<IActionResult> Index()
        {
            return View(await _context.ConvertLength.ToListAsync());
        }
    }
}
