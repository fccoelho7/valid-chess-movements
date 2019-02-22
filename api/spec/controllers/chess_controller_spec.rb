require 'rails_helper'

RSpec.describe ChessController, type: :controller do
  describe 'GET /chess/moviments/knight/:position' do
    before do
      get :knight_moviments, params: { position: 'A1' }
    end

    it 'status ok' do
      expect(response).to be_success
    end

    it 'returns knight moviments' do
      expected_response = { data: [[3, 2], [2, 3]] }.to_json
      expect(response.body).to eq(expected_response)
    end
  end
end
