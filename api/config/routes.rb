Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/chess/moviments/knight/:position', to: 'chess#knight_moviments'
end
