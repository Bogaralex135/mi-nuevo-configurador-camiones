import { NextResponse } from "next/server";

// Simulación de "Base de Datos" local para pruebas
const MOCK_USER = {
  email: "admin@camioneseuropeos.com",
  password: "Password2026*", // Una contraseña segura simulada
};

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // 1. Simular latencia de red (1.5 segundos de espera)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 2. Validar que los campos no estén vacíos
    if (!email || !password) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // 3. Validar credenciales
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      return NextResponse.json({
        success: true,
        message: "¡Inicio de sesión exitoso!",
        user: { name: "Administrador", email: email, role: "Gestion" }
      }, { status: 200 });
    }

    // 4. Credenciales incorrectas
    return NextResponse.json(
      { error: "Correo electrónico o contraseña incorrectos." },
      { status: 401 }
    );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Error interno del servidor simulado." },
      { status: 500 }
    );
  }
}