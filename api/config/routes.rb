Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/chess/movements/knight/:position', to: 'chess#knight_movements'
end
