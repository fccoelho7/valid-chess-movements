class ChessController < ApplicationController
  def knight_moviments
    position = params[:position]

    if ChessValidationService.validate_format(position)
      available_moviments = ChessKnightService.run(position)
      render json: { moviments: available_moviments }, status: :ok
    else
      render status: :error
    end
  end
end
