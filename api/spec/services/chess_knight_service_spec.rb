require 'rails_helper'
require './app/services/chess_knight_service'

RSpec.describe ChessKnightService do
  let(:service) { described_class }

  describe 'when asking for available movements' do
    it 'returns A1 movements' do
      expect(service.run('A1')).to match_array([[3, 2], [2, 3]])
    end

    it 'returns A8 movements' do
      expect(service.run('A8')).to match_array([[3, 7], [2, 6]])
    end

    it 'returns H1 movements' do
      expect(service.run('H1')).to match_array([[6, 2], [7, 3]])
    end

    it 'returns H8 movements' do
      expect(service.run('H8')).to match_array([[6, 7], [7, 6]])
    end

    it 'returns E4 movements' do
      expect(service.run('E4')).to match_array([
        [7, 3],
        [3, 3],
        [3, 5],
        [7, 5],
        [4, 6],
        [6, 6],
        [4, 2],
        [6, 2]
      ])
    end
  end
end