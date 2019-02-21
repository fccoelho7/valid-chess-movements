require 'rails_helper'

RSpec.describe ChessController, type: :controller do
  describe 'GET /chess/movements/:position' do
    before do
      get :movements, params: { position: 'A1' }
    end

    it 'status ok' do
      expect(response).to be_success
    end

    it 'returns position movements' do
      expected_response = { data: [[1, 2], [2, 1]] }.to_json
      expect(response.body).to eq(expected_response)
    end
  end
end
