// screens/legal.jsx — Términos y Condiciones + Política de Privacidad.
// Componentes: TermsScreen, PrivacyScreen. Props: onBack()
//
// ⚠️ Estos textos son una base razonable y genérica. Antes de cobrar o de
// manejar datos a escala, conviene que un profesional legal los revise para
// tu jurisdicción.

function LegalLayout({ title, subtitle, onBack, children }) {
  const cfg = window.APP_CONFIG || {};
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '8px 4px 60px' }}>
      {onBack && (
        <button onClick={onBack} style={{
          background: 'none', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)',
          padding: '8px 14px', cursor: 'pointer', fontFamily: 'var(--font)', fontWeight: 800,
          color: 'var(--muted)', marginBottom: 18,
        }}>← Volver</button>
      )}
      <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--text)', marginBottom: 6 }}>{title}</h1>
      {subtitle && <p style={{ color: 'var(--muted)', marginBottom: 8 }}>{subtitle}</p>}
      <p style={{ color: 'var(--faint)', fontSize: 13, marginBottom: 24 }}>
        Última actualización: {(cfg.legal && cfg.legal.lastUpdated) || ''}
      </p>
      <div style={{ lineHeight: 1.7, color: 'var(--text)', fontSize: 15 }}>{children}</div>
    </div>
  );
}

function LegalSection({ n, title, children }) {
  return (
    <section style={{ marginBottom: 22 }}>
      <h2 style={{ fontSize: 18, fontWeight: 900, color: 'var(--text)', marginBottom: 8 }}>
        {n}. {title}
      </h2>
      <div style={{ color: 'var(--muted)' }}>{children}</div>
    </section>
  );
}

function TermsScreen({ onBack }) {
  const cfg = window.APP_CONFIG || {};
  const brand = (cfg.brand && cfg.brand.name) || 'Wediom English';
  const email = (cfg.support && cfg.support.email) || '';
  const country = (cfg.legal && cfg.legal.country) || '';
  return (
    <LegalLayout title="Términos y Condiciones" subtitle={brand} onBack={onBack}>
      <LegalSection n="1" title="Aceptación">
        Al crear una cuenta o usar {brand} (en adelante, “la Plataforma”) aceptas estos
        Términos y Condiciones. Si no estás de acuerdo, no uses la Plataforma.
      </LegalSection>
      <LegalSection n="2" title="Descripción del servicio">
        {brand} es una aplicación web educativa para aprender inglés desde nivel básico a intermedio.
        Actualmente el acceso es <strong>gratuito</strong>. En el futuro podremos ofrecer
        planes de pago con funciones adicionales; cualquier cambio se comunicará con
        antelación y no afectará el contenido ya disponible de forma gratuita sin aviso.
      </LegalSection>
      <LegalSection n="3" title="Cuenta de usuario">
        Eres responsable de la información que registras y de mantener la confidencialidad
        de tu contraseña. Debes proporcionar datos veraces. Puedes solicitar la eliminación
        de tu cuenta escribiendo a {email}.
      </LegalSection>
      <LegalSection n="4" title="Uso aceptable">
        Te comprometes a no: (a) usar la Plataforma con fines ilícitos; (b) intentar
        vulnerar su seguridad o acceder a datos de otros usuarios; (c) copiar, revender o
        redistribuir el contenido sin autorización.
      </LegalSection>
      <LegalSection n="5" title="Propiedad intelectual">
        El contenido educativo, el diseño, la marca y el software son propiedad de {brand}
        o de sus licenciantes. Se te concede una licencia personal, limitada y no
        transferible para uso educativo.
      </LegalSection>
      <LegalSection n="6" title="Disponibilidad y cambios">
        La Plataforma se ofrece “tal cual”. Podemos modificar, suspender o discontinuar
        funciones en cualquier momento. Procuramos la mayor disponibilidad posible, pero no
        garantizamos un servicio ininterrumpido ni libre de errores.
      </LegalSection>
      <LegalSection n="7" title="Limitación de responsabilidad">
        {brand} no será responsable por daños indirectos derivados del uso o imposibilidad
        de uso de la Plataforma, en la medida permitida por la ley aplicable.
      </LegalSection>
      <LegalSection n="8" title="Planes de pago (futuro)">
        Cuando se habiliten planes de pago, se publicarán precios, condiciones de
        facturación, renovación y cancelación. Esos términos complementarán a los presentes.
      </LegalSection>
      <LegalSection n="9" title="Ley aplicable">
        Estos Términos se rigen por las leyes de {country}. Cualquier controversia se
        someterá a los tribunales competentes de dicha jurisdicción.
      </LegalSection>
      <LegalSection n="10" title="Contacto">
        Para consultas sobre estos Términos: <strong>{email}</strong>.
      </LegalSection>
    </LegalLayout>
  );
}

function PrivacyScreen({ onBack }) {
  const cfg = window.APP_CONFIG || {};
  const brand = (cfg.brand && cfg.brand.name) || 'Wediom English';
  const email = (cfg.support && cfg.support.email) || '';
  const hasGA = !!(cfg.analytics && cfg.analytics.measurementId);
  return (
    <LegalLayout title="Política de Privacidad" subtitle={brand} onBack={onBack}>
      <LegalSection n="1" title="Responsable del tratamiento">
        El responsable del tratamiento de los datos es {brand}. Para cualquier asunto de
        privacidad puedes escribir a {email}.
      </LegalSection>
      <LegalSection n="2" title="Datos que recopilamos">
        <ul style={{ paddingLeft: 20 }}>
          <li><strong>Datos de cuenta:</strong> nombre, email y contraseña (almacenada de
            forma cifrada, nunca en texto plano).</li>
          <li><strong>Datos de progreso:</strong> tu avance en lecciones, XP, racha y
            secciones completadas, para sincronizar tu aprendizaje.</li>
          <li><strong>Datos técnicos y de uso:</strong> de forma anónima/agregada mediante
            Google Analytics (páginas vistas, navegador, aproximación geográfica) {hasGA
              ? 'cuando aceptas las cookies.' : '(actualmente no activo).'}</li>
        </ul>
      </LegalSection>
      <LegalSection n="3" title="Almacenamiento local (localStorage)">
        Guardamos parte de tu progreso y preferencias en el almacenamiento local de tu
        navegador para que la app funcione, incluso sin conexión. Estos datos permanecen en
        tu dispositivo y puedes borrarlos limpiando los datos del navegador.
      </LegalSection>
      <LegalSection n="4" title="Cookies y Analytics">
        Usamos Google Analytics (GA4) para entender de forma anónima cómo se usa la
        Plataforma y mejorarla. Estas cookies solo se activan si las aceptas en el banner de
        consentimiento. Puedes rechazarlas sin perder funcionalidad esencial. Anonimizamos
        las direcciones IP.
      </LegalSection>
      <LegalSection n="5" title="Finalidad del tratamiento">
        Usamos tus datos para: crear y gestionar tu cuenta, guardar tu progreso, brindarte
        soporte y mejorar el servicio. No vendemos tus datos personales a terceros.
      </LegalSection>
      <LegalSection n="6" title="Terceros">
        Empleamos proveedores que pueden procesar datos por nuestra cuenta: Google
        (Analytics) y nuestro proveedor de hosting. Cada uno trata los datos conforme a sus
        propias políticas y a la normativa aplicable.
      </LegalSection>
      <LegalSection n="7" title="Conservación">
        Conservamos tus datos mientras tu cuenta esté activa. Si solicitas la eliminación,
        borraremos tus datos personales salvo aquellos que debamos conservar por obligación
        legal.
      </LegalSection>
      <LegalSection n="8" title="Tus derechos">
        Puedes solicitar acceso, rectificación, eliminación u oposición al tratamiento de
        tus datos escribiendo a {email}. Atenderemos tu solicitud en un plazo razonable.
      </LegalSection>
      <LegalSection n="9" title="Menores de edad">
        Si eres menor de edad, debes contar con el consentimiento de tu padre, madre o tutor
        para usar la Plataforma.
      </LegalSection>
      <LegalSection n="10" title="Cambios en esta política">
        Podemos actualizar esta Política. Publicaremos la versión vigente con su fecha de
        actualización en esta misma página.
      </LegalSection>
      <LegalSection n="11" title="Contacto">
        Dudas sobre privacidad: <strong>{email}</strong>.
      </LegalSection>
    </LegalLayout>
  );
}

window.TermsScreen = TermsScreen;
window.PrivacyScreen = PrivacyScreen;
