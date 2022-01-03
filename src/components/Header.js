import React from 'react'
import './header.css'

function Header() {
    return (
        <header>
            <div class="text-center bg-image">
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="text-white">
                            <h1 class="mb-3">Header</h1>
                            <h4 class="p-5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe facere molestias aliquam, repudiandae fuga est dolor ex accusantium exercitationem corporis nulla doloremque incidunt expedita nobis. Exercitationem hic rerum incidunt.</h4>
                            <a class="btn btn-outline-light btn-lg" href="#!" role="button">Go to this website</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
