require 'rails_helper'

RSpec.describe ChessController, type: :controller do
  describe 'GET /chess/movements/knight/:position' do
    describe 'with a valid position' do
      before do
        get :knight_movements, params: { position: 'A1' }
      end

      it 'status ok' do
        expect(response).to be_success
      end

      it 'returns knight movements' do
        expected_response = { movements: [[3, 2], [2, 3]] }.to_json
        expect(response.body).to eq(expected_response)
      end
    end

    describe 'with an invalid position' do
      before do
        get :knight_movements, params: { position: 'A10' }
      end

      it 'status error' do
        expect(response).to be_error
      end
    end
  end
end
