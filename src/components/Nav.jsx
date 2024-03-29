import React from 'react'

function Nav() {
  return (
    <div>
        <nav class="bg-blue-500 p-4">
        <div class="container mx-auto flex justify-between items-center">

            <a href="#" class="text-white font-bold text-xl">Your Brand</a>

            <div class="hidden md:flex space-x-4">
                <a href="#" class="text-white">Home</a>
                <a href="#" class="text-white">About</a>
                <a href="#" class="text-white">Services</a>
                <a href="#" class="text-white">Contact</a>
            </div>
          </div>
      </nav>
    </div>
  )
}

export default Nav
