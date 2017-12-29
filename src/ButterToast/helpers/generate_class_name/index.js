export default function generateClassName(config = {}) {
    const nameClass = config.name ? ` butter-toast-${config.name}` : '';

    return `butter-toast-tray${nameClass} ${config.trayPosition || ''}`.trim();
}