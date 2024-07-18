document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status === 'success') {
          alert('Messaggio inviato, ti contatteremo al più presto!');
        } else {
          alert('C\'è stato un problema nell\'invio del messaggio. Riprova più tardi.');
        }
      } else {
        alert('C\'è stato un problema nell\'invio del messaggio. Riprova più tardi.');
      }
    } catch (error) {
      alert('C\'è stato un problema nell\'invio del messaggio. Riprova più tardi.');
    }
  });
});