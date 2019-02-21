class ChessController < ApplicationController
  def movements
    render json: { data: [[1, 2], [2, 1]] }, status: :ok
  end
end
