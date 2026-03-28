<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class SaludoTest extends TestCase
{
    public function test_suma_correcta()
    {
        $this->assertEquals(5, 3 + 2);
    }

    public function test_mensaje_no_vacio()
    {
        $mensaje = 'Hola desde Laravel';
        $this->assertNotEmpty($mensaje);
    }
}
