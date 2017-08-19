export default function generateClassName(config) {
    const nameClass = config.name ? ` butter-toast-${config.name}` : '',
        type = config.toastType.toLowerCase();

    return `butter-toast-tray ${config.trayPosition} toast-${type}${nameClass}`;
}