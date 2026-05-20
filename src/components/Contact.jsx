const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')

  try {
    const response = await fetch('https://formspree.io/f/mqejewjg', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: new FormData(e.target),
    })

    if (response.ok) {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } else {
      const data = await response.json()
      console.log(data)
      setStatus('error')
    }
  } catch (err) {
    console.log(err)
    setStatus('error')
  }
}
