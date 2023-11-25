
autocmd BufNewFile,BufRead *.js,*.json call Javascript()
function Javascript()
  setlocal
  \ textwidth=80
  \ tabstop=2
  \ shiftwidth=2
  \ softtabstop=2
  \ expandtab
  \ autoindent
  \ nosmartindent
  \ nocindent
  \ list
  \ listchars=tab:»·,trail:·
  \ filetype=javascript
  \ syntax=javascript
endfunction
