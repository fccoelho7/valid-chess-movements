class ChessController < ApplicationController
  def knight_moviments
    available_moviments = ChessKnightService.run(params[:position])
    render json: { data: available_moviments }, status: :ok
  end
end
