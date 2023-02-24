export const formatDate = (date) => {
    return new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: '2-digit' })
}