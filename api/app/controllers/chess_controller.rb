class ChessController < ApplicationController
  def knight_movements
    position = params[:position]

    if ChessValidationService.validate_format(position)
      available_movements = ChessKnightService.run(position)
      render json: { movements: available_movements }, status: :ok
    else
      render status: :error
    end
  end
end
