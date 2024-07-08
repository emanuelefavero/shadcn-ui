function Footer() {
  return (
    <footer className='w-full flex justify-center items-center flex-wrap gap-2 font-medium text-sm 2xxs:text-base text-muted-foreground pb-20'>
      <span>
        {new Date().getFullYear()} <span className='hidden 2xxs:inline'>•</span>
      </span>
      <a
        href='https://emanuelefavero.com'
        title='https://emanuelefavero.com'
        target='_blank'
      >
        Emanuele Favero
      </a>
    </footer>
  )
}

export { Footer }
